 // ЗАДАНИИ -1

 let man = {
    name:'Ayub',
    family:'Elmurzaev',
    age:21,
    growth:185,
    weight:65,
    login:'elmurzaevayub@mail.ru',
    password:'wint',
    money:1000,
   };
   
   
   // Задание -2
   
    man.address = {
     citi: 'grozny',
      street:'Djabrailova',
      house: 21,
    };
   
   console.log(man.address)
   
   
     // Задание-3
   
   
    let input = 'wint';
   
    if ( man.password === input ) {
        console.log(`Добро пожаловать ${man.name} ${man.family} Ваш логин ${man.login}`);
       
    
    } else {
      console.log(`Указанный пароль ${input} не верен.Попробуйте еще раз`);
    }
     