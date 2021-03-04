export interface TProductPages {
    children?: React.ReactNode;
    VerticalBar?: boolean;
    NumberOfProducts: string;
    CanLeft: boolean;
    CanRight: boolean;
    changePages: {
        right: () => void;
        left: () => void;
    };
}
