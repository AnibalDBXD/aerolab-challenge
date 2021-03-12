import ContentLoader from "react-content-loader";

const ProductLoader: React.FC = (): JSX.Element => (
    <ContentLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb" height={300} speed={2} style={{ boxShadow: "5px 8px 11px -2px rgb(0 0 0 / 17%)" }} viewBox="0 0 300 300" width={300}>
        <rect height="183" rx="0" ry="0" width="276" x="12" y="12" />
        <rect height="16" rx="0" ry="0" width="100" x="12" y="230" />
        <rect height="18" rx="0" ry="0" width="200" x="12" y="250" />
    </ContentLoader>
);

export default ProductLoader;
