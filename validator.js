function validateInput(input) {
    const type = input.dataset.type;
    const fieldName = input.dataset.name || 'Este campo';
  
    if (!type) return null;
  
    if (type === 'string') {
      const value = input.value.trim();
      if (!value) {
        return `El campo ${fieldName} es obligatorio.`;
      }
      const min = parseInt(input.dataset.minlength || 0);
      const max = parseInt(input.dataset.maxlength || Infinity);
      if (value.length < min || value.length > max) {
        return `El campo ${fieldName} no es válido.`;
      }
    }
  
    if (type === 'number') {
      const value = input.value.trim();
      if (!value) {
        return `El campo ${fieldName} es obligatorio.`;
      }
      const number = parseFloat(value);
      const min = parseFloat(input.dataset.min || -Infinity);
      const max = parseFloat(input.dataset.max || Infinity);
      if (isNaN(number) || number < min || number > max) {
        return `El campo ${fieldName} no es válido.`;
      }
    }
  
    if (type === 'select') {
      if (!input.value) {
        return `El campo ${fieldName} es obligatorio.`;
      }
    }
  
    if (type === 'radio') {
        console.log('es radio')
        const radios = document.querySelectorAll(`input[name="${input.name}"]`);
        const isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
          return `Debe seleccionar una opción para ${fieldName}.`;
        }
      }
    
      if (type === 'checkbox') {
        console.log('es checkbox')
        const checkboxes = document.querySelectorAll(`input[name="${input.name}"]`);
        const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!isChecked) {
          return `Debe seleccionar al menos una opción para ${fieldName}.`;
        }
      }
    
  
    return null;
  }

  function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) errorDiv.textContent = message;
    input.classList.add('invalid');
  }
  
  function clearError(input) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) errorDiv.textContent = '';
    input.classList.remove('invalid');
  }