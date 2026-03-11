import { initNavigation } from './global/navigation.js';
import { initAnimations } from './global/animations.js';
import { initFormValidation } from './pages/partials/form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initFormValidation();
    
    console.log('Ink Noir initialized');
});
