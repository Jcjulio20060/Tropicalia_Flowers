const userSchema = {
  name: '',
  email: '',
  cpf: "",
  birthday: "",
  password: '',
  address: {
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: ''
  },
  cart: []
};

export default userSchema;