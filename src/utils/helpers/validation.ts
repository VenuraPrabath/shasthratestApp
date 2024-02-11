interface ValidationResult {
    isValid: boolean;
    message?: string;
  }
  
  export enum ValidationType {
    Required = 'required',
    Email = 'email',
    Mobile = 'mobile',
    Custom = 'custom',
  }
  
  interface ValidationRule {
    type: ValidationType;
    message?: string;
    customValidator?: (value: string) => boolean;
  }
  
  const validate = (value: string, rules: ValidationRule[]): ValidationResult => {
    for (const rule of rules) {
      switch (rule.type) {
        case ValidationType.Required:
          if (!value.trim()) {
            return { isValid: false, message: rule.message || 'This field is required' };
          }
          break;
        case ValidationType.Email:
          const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
          if (!emailPattern.test(value)) {
            return { isValid: false, message: rule.message || 'Invalid email format' };
          }
          break;
        case ValidationType.Mobile:
          const mobilePattern = /^(?:\+94|0)?\d{9}$/;
          if (!mobilePattern.test(value)) {
            return { isValid: false, message: rule.message || 'Invalid mobile number' };
          }
          break;
        case ValidationType.Custom:
          if (rule.customValidator && !rule.customValidator(value)) {
            return { isValid: false, message: rule.message || 'Custom validation failed' };
          }
          break;
        default:
          break;
      }
    }
    return { isValid: true };
  };
  