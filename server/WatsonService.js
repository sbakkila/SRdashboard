`use strict`;
const path = require('path');

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

function classifyImage(filePath, res, filenames, filename) {
  var params = {
    images_file: fs.createReadStream(filePath),
    classifier_ids: 'Emergency_1149889657',
    owners: 'me',
    threshold: 0.2,
  };

  visualRecognition.classify(params, function(err, response) {
    if (err)
      console.log(err);
    else {
      console.log('Classified photo', response);
      let classifiers = response.images[0].classifiers
        .map(classifier => classifier.classes)[0]
        .map(cl => [cl.class, cl.score]);

      let highestRating = classifiers.reduce((highestScore, classifier) => {
        return classifier.score > highestScore;
      });
      console.log('Classifiers:', classifiers);
      if (classifiers[0][0] === 'Emergency') {
        filenames.push(filename)
        res.sendStatus(201)
        return getEmergencyImage(filePath, classifiers[0].score);
      } else {
        res.sendStatus(201)
        return false;
      }
    }
  });
};

function getEmergencyImage(filePath, confidenceScore) {
  return [filePath, confidenceScore];
}

module.exports = classifyImage;
