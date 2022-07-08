export class Helper {

    static INSTANCE: Helper = new Helper()

    private init() { }

    numberFormatToCurrency(value: number): string {
        var formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return formatter.format(value)
    }
}