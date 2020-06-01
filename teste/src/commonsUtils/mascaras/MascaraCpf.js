export function cpfMask(value){
    return value
      .toString().replace(/\D/g, '')
      .toString().replace(/(\d{3})(\d)/, '$1.$2') 
      .toString().replace(/(\d{3})(\d)/, '$1.$2')
      .toString().replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .toString().replace(/(-\d{2})\d+?$/, '$1')
  }