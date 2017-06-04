`use strict`;

var credentials = {
  'url': 'https://gateway-a.watsonplatform.net/visual-recognition/api',
  'note': 'It may take up to 5 minutes for this key to become active',
  'api_key': 'cebb33a6e7701a6a0c37d4586a72750e4dc68257',
};

const VisualRecognitionV3 =
  require('watson-developer-cloud/visual-recognition/v3');
const fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  api_key: credentials.api_key,
  version_date: VisualRecognitionV3.VERSION_DATE_2016_05_20
});

var params = {
  images_file: fs.createReadStream('./resources/car.png'),
  classifier_ids: 'AquaticEmergencies_15839687',
  owners: 'me',
  threshold: 0.4,
};

visualRecognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
