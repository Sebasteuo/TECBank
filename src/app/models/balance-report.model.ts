//Atributos para el objeto BalanceReport
import { BalanceLine } from "./balance-line.model";

export class BalanceReport {
    cliente: number|undefined;
    lineas: BalanceLine[]|undefined;
}
