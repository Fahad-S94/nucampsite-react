import { Container } from 'reactstrap';
// import CampsiteDetail from '../features/campsites/CampsiteDetail';
// import CampsitesList from '../features/campsites/CampsitesList';
// import { selectRandomCampsite } from '../features/campsites/campsitesSlice';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
