import { IICon } from "../types";

const BuyWhite: React.FC<IICon> = ({ size, height = "50px", width = "50px", style, className }: IICon): JSX.Element => (
    <svg
        className={className}
        height={size || height}
        style={style}
        version="1.1"
        viewBox="0 0 50 50"
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>icon-white</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <filter filterUnits="objectBoundingBox" height="128.3%" id="filter-1" width="128.3%" x="-9.1%" y="-9.1%">
                <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur>
                <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
        </defs>
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g id="Catalog" transform="translate(-652.000000, -634.000000)">
                <g id="products" transform="translate(132.000000, 624.000000)">
                    <g id="line-1">
                        <g filter="url(#filter-1)" id="product-card-hover" transform="translate(300.000000, 0.000000)">
                            <g id="icon-white" transform="translate(222.000000, 12.000000)">
                                <g>
                                    <circle cx="21" cy="21" fill="#FFFFFF" id="Oval-Copy-6" r="21"></circle>
                                    <path
                                        d="M29.9946924,29.1076172 L28.8822001,15.5306936 C28.8580225,15.225303 28.594495,14.9894436 28.277518,14.9894436 L25.2452125,14.9894436 L25.2452125,13.9296875 C25.2452125,12.3142578 23.8849203,11 22.2129071,11 L19.7870627,11 C18.1150494,11 16.7547572,12.3142578 16.7547572,13.9296875 L16.7547572,14.9894436 L13.7224518,14.9894436 C13.4054748,14.9894436 13.1419472,15.225303 13.1177696,15.5306936 L12.0053178,29.1073828 C11.9665447,29.5939844 12.1411651,30.0784375 12.4843816,30.4365234 C12.8275982,30.7946094 13.3141821,31 13.8193238,31 L28.1806055,31 C28.6857472,31 29.1722907,30.7946484 29.5155477,30.4365625 C29.8588046,30.0784766 30.033425,29.5940234 29.9946924,29.1076172 Z M18,14.25 C18,13.00935 18.80748,12 19.8,12 L22.2,12 C23.19252,12 24,13.00935 24,14.25 L24,15 L18,15 L18,14.25 Z"
                                        fill="#0AD4FA"
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

export default BuyWhite;
