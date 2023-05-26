// Define Props Navbar Interface
export interface PropsNavbar {
    window?: () => Window;
    drawerWidth: number;
    handleDrawerToggle(): void;
}

// Define State Navbar Interface
export interface StateNavbar {
    name: string;
    role: string;
}
