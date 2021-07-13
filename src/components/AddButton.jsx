import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const AddButton = withStyles({
  root: {
    backgroundColor: 'var(--brandColor)',
    '&:hover': {
      backgroundColor: 'var(--darkBrand)',
    },
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
})(Button);

export default AddButton;
