// Define Menu Interface
interface Menu {
    name: string;
    path: string;
    icon: any;
}

// Define Props Sidebar Interface
export interface PropsSidebar {
    menu: Menu[];
}
