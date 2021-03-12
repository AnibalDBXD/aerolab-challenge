import ContentLoader from "react-content-loader";

const UserInfoLoader: React.FC = (): JSX.Element => (
    <ContentLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb" height={48} speed={2} viewBox="0 0 248 48" width={226}>
        <rect height="36" rx="0" ry="0" width="100" x="25" y="10" />
        <rect height="36" rx="0" ry="0" width="120" x="130" y="10" />
    </ContentLoader>
);

export default UserInfoLoader;
