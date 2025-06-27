from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import pickle
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Izinkan semua origin untuk akses (bisa disesuaikan dengan frontend kamu)

# ======= Load model dan tokenizer =======
model = load_model('sentiment.h5')

with open('tokenizer.pickle', 'rb') as f:
    tokenizer = pickle.load(f)

# Harus sesuai dengan training (bisa disimpan ke file saat training dan di-load di sini)
MAXLEN = 100

# ======= Label yang digunakan saat training =======
labels = ['very negative','negative','positive' ,'very positive', 'neutral']

# ======= Fungsi cleansing =========
def cleansing(sent):
    string = sent.lower()
    string = re.sub(r'[^a-zA-Z0-9]|([^0-9A-Za-z \t])|(\w+:\/\/\S+)|^rt|http.+?', ' ', string)
    string = re.sub(r"\d+", "", string)
    string = re.sub(r'http\S+', '', string)
    string = re.sub('@[^\s]+', '', string)
    string = re.sub(r'#[^\s]+', '', string)
    string = string.encode("ascii", "ignore").decode()
    string = re.sub('\s+',' ', string)
    return string.strip()

# ======= Endpoint Predict =========
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if not data or 'text' not in data:
            return jsonify({'error': 'No text provided'}), 400
        
        text = data['text']
        if not text.strip():
            return jsonify({'error': 'Text cannot be empty'}), 400

        cleaned = cleansing(text)
        sequence = tokenizer.texts_to_sequences([cleaned])
        padded = pad_sequences(sequence, maxlen=MAXLEN, padding='post')

        prediction = model.predict(padded)[0]
        predicted_index = int(np.argmax(prediction))
        predicted_label = labels[predicted_index]

        return jsonify({
            'label': predicted_label,
            'confidence': float(prediction[predicted_index]),
            'probabilities': prediction.tolist(),
            'classes': labels
        })
        
    except Exception as e:
        print("Prediction error:", e)
        return jsonify({'error': 'Internal server error'}), 500

# ======= Endpoint Tes dan Health =========
@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'Sentiment Analysis API is running'})

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    print("🔁 Starting Flask server on http://localhost:5001")
    print("📌 Endpoints:")
    print("  - GET  /         : Home page")
    print("  - GET  /health   : Health check")
    print("  - POST /predict  : Sentiment prediction")
    app.run(debug=True, port=5001, host='0.0.0.0')