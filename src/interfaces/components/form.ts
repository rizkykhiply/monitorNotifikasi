// Define Select Data Interface
interface SelectData {
    value: string | number;
    name: string;
}

// Define Props Select Component Interface
export interface PropsSelectComponent {
    menu: SelectData[];
}
