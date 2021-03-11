import { IICon } from "../types";

const BuyBlue: React.FC<IICon> = ({ size, height = "42px", width = "42px", style, className }: IICon): JSX.Element => (
    <svg
        className={className}
        height={size || height}
        style={style}
        version="1.1"
        viewBox="0 0 42 42"
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>Icon</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <radialGradient cx="50%" cy="50.8764901%" fx="50%" fy="50.8764901%" id="radialGradient-1" r="79.8469947%">
                <stop offset="0%" stopColor="#0AD4FA"></stop>
                <stop offset="100%" stopColor="#25BBF1"></stop>
            </radialGradient>
        </defs>
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g id="Catalog" transform="translate(-354.000000, -648.000000)">
                <g id="products" transform="translate(132.000000, 624.000000)">
                    <g id="line-1">
                        <g id="product-card" transform="translate(0.000000, 12.000000)">
                            <g id="Icon" transform="translate(222.000000, 12.000000)">
                                <g>
                                    <circle cx="21" cy="21" fill="url(#radialGradient-1)" id="Oval-Copy-5" r="21"></circle>
                                    <path
                                        d="M29.9946924,29.1076172 L28.8822001,15.5306936 C28.8580225,15.225303 28.594495,14.9894436 28.277518,14.9894436 L25.2452125,14.9894436 L25.2452125,13.9296875 C25.2452125,12.3142578 23.8849203,11 22.2129071,11 L19.7870627,11 C18.1150494,11 16.7547572,12.3142578 16.7547572,13.9296875 L16.7547572,14.9894436 L13.7224518,14.9894436 C13.4054748,14.9894436 13.1419472,15.225303 13.1177696,15.5306936 L12.0053178,29.1073828 C11.9665447,29.5939844 12.1411651,30.0784375 12.4843816,30.4365234 C12.8275982,30.7946094 13.3141821,31 13.8193238,31 L28.1806055,31 C28.6857472,31 29.1722907,30.7946484 29.5155477,30.4365625 C29.8588046,30.0784766 30.033425,29.5940234 29.9946924,29.1076172 Z M18,14.25 C18,13.00935 18.80748,12 19.8,12 L22.2,12 C23.19252,12 24,13.00935 24,14.25 L24,15 L18,15 L18,14.25 Z"
                                        fill="#FFFFFF"
                                        fillRule="nonzero"
                                        id="Shape-Copy-2"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

export default BuyBlue;
