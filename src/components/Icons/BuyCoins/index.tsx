import { IICon } from "../types";

const BuyCoins: React.FC<IICon> = ({ size, height = "32px", width = "32px", style }: IICon): JSX.Element => (
    <svg height={size || height} style={style} viewBox="445.579 394 26.421 26" width={size || width} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter filterUnits="objectBoundingBox" height="128.3%" id="filter-1" width="128.3%" x="-9.1%" y="-9.1%">
                <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
                <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" />
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <radialGradient cx="50%" cy="50%" id="radialGradient-2" r="68.6284858%">
                <stop offset="0" stopColor="#FFCF00" />
                <stop offset="1" stopColor="#F7AE15" />
            </radialGradient>
        </defs>
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1" transform="matrix(1, 0, 0, 1, 443.764648, 392.34433)">
            <g id="Catalog-pg1" transform="translate(-609.000000, -731.000000)">
                <g id="products" transform="translate(132.000000, 622.000000)">
                    <g id="line-1">
                        <g filter="url(#filter-1)" id="product-card-hover" transform="translate(300.000000, 0.000000)">
                            <g id="money" transform="translate(71.000000, 100.000000)">
                                <g transform="translate(108.000000, 11.000000)">
                                    <g>
                                        <circle cx="13" cy="13" fill="url(#radialGradient-2)" id="Oval-Copy-3" r="13" />
                                        <path
                                            d="M13,3.0952381 C7.54580357,3.0952381 3.0952381,7.54657738 3.0952381,13 C3.0952381,18.4541964 7.54657738,22.9047619 13,22.9047619 C18.4541964,22.9047619 22.9047619,18.4534226 22.9047619,13 C22.9047619,7.54580357 18.4534226,3.0952381 13,3.0952381 Z M13,21.7440476 C8.17850893,21.7440476 4.25595238,17.8214911 4.25595238,13 C4.25595238,8.17850893 8.17850893,4.25595238 13,4.25595238 C17.8214911,4.25595238 21.7440476,8.17850893 21.7440476,13 C21.7440476,17.8214911 17.8214911,21.7440476 13,21.7440476 Z"
                                            fill="#F8B013"
                                            fillRule="nonzero"
                                            id="Shape"
                                        />
                                        <path
                                            d="M13,5.2962963 C8.76834769,5.2962963 5.2962963,8.76956614 5.2962963,13 C5.2962963,17.2316523 8.76956614,20.7037037 13,20.7037037 C17.2316523,20.7037037 20.7037037,17.2304339 20.7037037,13 C20.7037037,8.76834769 17.2304339,5.2962963 13,5.2962963 Z M13,19.5245654 C9.40233107,19.5245654 6.47543462,16.5976689 6.47543462,13 C6.47543462,9.40233107 9.40233107,6.47543462 13,6.47543462 C16.5976689,6.47543462 19.5245654,9.40233107 19.5245654,13 C19.5245654,16.5976689 16.5976689,19.5245654 13,19.5245654 Z"
                                            fill="#F8B013"
                                            fillRule="nonzero"
                                            id="Shape"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
        <path d="M 459.761 402.052 H 463.372 V 409.275 H 470.595 V 412.886 H 463.372 V 420.109 H 459.761 V 412.886 H 452.538 V 409.275 H 459.761 Z" style={{ fill: "rgba(0, 255, 34, 0.88)" }} />
    </svg>
);

export default BuyCoins;
