import { IICon } from "../types";

const ArrowRight: React.FC<IICon> = ({ height = "48px", width = "48px", size, style }: IICon): JSX.Element => (
    <svg height={size || height} style={style} version="1.1" viewBox="0 0 48 48" width={size || width} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>arrow-up</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g id="Catalog-p2" transform="translate(-1260.000000, -512.000000)">
                <g id="menu" transform="translate(132.000000, 512.000000)">
                    <g id="arrow-right" transform="translate(1128.000000, 0.000000)">
                        <circle cx="24" cy="24" id="Oval-4" r="23.5" stroke="#D9D9D9" strokeWidth="1"></circle>
                        <polygon
                            fill="#D9D9D9"
                            fillRule="evenodd"
                            id="Shape"
                            points="28.59 20 24 24.58 19.41 20 18 21.41 24 27.41 30 21.41"
                            transform="translate(24.000000, 23.705000) scale(1, -1) rotate(-90.000000) translate(-24.000000, -23.705000) "></polygon>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

export default ArrowRight;
