/***********************
 * 
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o
 * número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7.
 * Utilize a estrutura Switch.
 * 
 */

function isWeekend(day) {
    switch(day) {
        case 1: 
            return "Domingo";
            break;
        case 2:
            return "Dia de Semana";
            break;
        case 3:
            return "Dia de Semana";
            break;
        case 4:
            return "Dia de Semana";
            break;
        case 5:
            return "Dia de Semana";
            break;
        case 6:
            return "Dia de Semana";
            break;
        case 7: 
            return "Sábado";
            break;
        default:
            return "Dia Inválido";
    }
}

console.log(isWeekend(14))