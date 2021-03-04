import { TIcon } from "../types";

const ArrowLeft: React.FC<TIcon> = ({ height = "48px", width = "48px", size, style }: TIcon): JSX.Element => (
    <svg height={size || height} style={style} version="1.1" viewBox="0 0 48 48" width={size || width} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>arrow-left</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g id="Catalog-p2" transform="translate(-1200.000000, -512.000000)">
                <g id="menu" transform="translate(132.000000, 512.000000)">
                    <g id="arrow-left" transform="translate(1068.000000, 0.000000)">
                        <g id="Group-15">
                            <circle cx="24" cy="24" id="Oval-4" r="23.5" stroke="#D9D9D9"></circle>
                            <polygon
                                fill="#D9D9D9"
                                id="Shape"
                                points="28.59 20 24 24.58 19.41 20 18 21.41 24 27.41 30 21.41"
                                transform="translate(24.000000, 23.705000) rotate(-270.000000) translate(-24.000000, -23.705000) "></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

export default ArrowLeft;
