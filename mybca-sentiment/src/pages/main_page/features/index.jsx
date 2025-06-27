import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Clasify your word.',
    description:
      'Can be used to classify the sentiment of a word or sentence. It can be used to classify the sentiment of a word or sentence.',
    icon: CloudArrowUpIcon,
  },
  {
    name: '5 Sentiment Clasifier.',
    description: 'This apps can classify the sentiment of a word or sentence into 5 classes: very positive, positive, neutral, negative, and very negative.',
    icon: LockClosedIcon,
  },
  {
    name: 'LSTM Algorithm.',
    description: 'This apps uses LSTM (Long Short-Term Memory) algorithm to classify the sentiment of a word or sentence.',
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden py-24 sm:py-32" id="features">
      {/* Garis pembatas */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bw-250 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div> <br /><br />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-x-6">
          <img
            alt="Product screenshot"
            src="./apps.png"
            width={2432}
            height={1442}
            className="w-100 max-w-none rounded-xl md:-mr-4 lg:-mr-0 lg:ml-30"
          />
          <div className="lg:pt-4 lg:pl-4 lg:ml-10">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold text-indigo-400 sm: text-2xl">Clasify</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-200 sm:text-5xl">
                Word to Sentiment
              </p>
              <p className="mt-6 text-lg/8 text-gray-400">
                My BCA Sentiment Clasification dapat mengklasifikasikan sentimen dari kalimat yang anda masukan. Dengan menggunakan model machine learning, My BCA Sentiment Clasification dapat memberikan hasil klasifikasi sentimen dengan akurasi yang tinggi.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-200">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}