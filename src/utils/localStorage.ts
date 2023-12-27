// Função genérica para salvar dados no localStorage
export const saveToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  // Função genérica para carregar dados do localStorage
  export const loadFromLocalStorage = (key: string, defaultValue: any) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  };
  