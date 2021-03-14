import ContentLoader from "react-content-loader";

const PageLoader: React.FC = (): JSX.Element => (
    <ContentLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb" height={80} speed={2} viewBox="0 0 600 80" width={600}>
        <rect height="78" rx="0" ry="0" width="575" x="21" y="0" />
    </ContentLoader>
);

export default PageLoader;
