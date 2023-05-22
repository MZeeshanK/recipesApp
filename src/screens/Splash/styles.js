import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  background: {
    widht: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 14,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  bigTitle: {
    fontSize: 50,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
    marginTop: 20,
    marginBottom: 64,
  },
});

export default styles;
