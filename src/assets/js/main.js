// Import scss file
import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Or individual bootstrap imports
// import Alert from 'bootstrap/js/dist/alert';
// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

// Import custom components
import Foo from './components/Foo';

// Init components on document loaded
window.onload = () => {
    // Init Foo component
    Foo("Foo imported successfully");
}