// Фамилия, Имя, дата рождения, Расположение

export const openModal = () => {
    
}

export const makeDate = (DateOfBirth) => {
    return (DateOfBirth[0] + '.'+ DateOfBirth[1] + '.' + DateOfBirth[2])
  }

const Users = [
    {
        name: "Oliver ",
        lastName: 'Manson',
        DateOfBirth: [1983, 11, 12],
        location: {
            city: 'Liverpool',
            cowntry: 'GreatBrit'
        }
    },
    {
        name: "Harry ",
        lastName: 'Jackson',
        DateOfBirth: [1983, 9, 22],
        location: {
            city: 'Almaty',
            cowntry: 'Kazakhstan'
        }
    },
    {
        name: "Jacob ",
        lastName: 'Grayson',
        DateOfBirth: [1999, 3, 22],
        location: {
            city: 'Almaty',
            cowntry: 'Kazakhstan'
        }
    }
]

export default Users