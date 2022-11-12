/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type TMale = 'male';
type TFemale = 'female';
type TPerson = { name: string; age: number; gender: TMale | TFemale };
type TEmployee = TPerson & { company: string };
type TPersons = TPerson[];
export function getPersons(): TPersons;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
export function personToString(person: TPerson | TEmployee): string;
