import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containr: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
    
  },
  text: {
    color: '$white',
    fontSize: 18,
    fontWeight: '300',
    paddingVertical: 20,
  }
});

export default styles;
