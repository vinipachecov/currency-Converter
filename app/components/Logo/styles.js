import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;


export default EStyleSheet.create({
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white'    
  },
  logo: {
    width: '$largeImageSize',
    tintColor: '$primaryBlue',
  },
  container: {
    alignItems: 'center',
  },
  ImageBackground: {
    width: imageWidth,
    justifyContent: 'center',
  },
  image: {
    width: imageWidth / 2,
    alignSelf: 'center',
  },
  containerImage: {
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  }
});
