import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import TeamCard from '../pages/overview/TeamCard';
import UserCards from '../pages/overview/UserCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import GridCard from '../project/overview/GridCard';
import ProductCards from '../ecommerce/product/overview/ProductCards';
import ProductCardsList from '../ecommerce/product/overview/ProductCardList';
import GalleryCards from '../pages/overview/GalleryCard';
import ContactCard from '../contact/overview/ContactCard';
import { Cards } from '../../components/cards/frame/cards-frame';
import SampleCardOne from '../../components/cards/sampleCard/SampleCardOne';

const actions = (
  <>
    <Link to="#">
      <FeatherIcon size={14} icon="eye" />
      <span>View</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="edit" />
      <span>Edit</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="trash-2" />
      <span>Delete</span>
    </Link>
  </>
);

const WidgetsCard = () => {
  return (
    <>
      <PageHeader
        title="Widgets Cards"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col md={8}>
            <GridCard
              value={{
                id: 1,
                title: 'Dashboard UI Project',
                status: 'early',
                content:
                  'Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.',
                category: 'Web Design',
                rate: 5,
                popular: 1,
                percentage: 85,
              }}
            />
          </Col>
          <Col md={8}>
            <GridCard
              value={{
                id: 1,
                title: 'Dashboard UI Project',
                status: 'early',
                content:
                  'Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.',
                category: 'Web Design',
                rate: 5,
                popular: 1,
                percentage: 85,
              }}
            />
          </Col>
          <Col md={8}>
            <GridCard
              value={{
                id: 1,
                title: 'Dashboard UI Project',
                status: 'early',
                content:
                  'Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.',
                category: 'Web Design',
                rate: 5,
                popular: 1,
                percentage: 85,
              }}
            />
          </Col>

          <Col md={6}>
            <UserCards
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <UserCards
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <UserCards
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <UserCards
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>

          <Col md={6}>
            <ProductCards
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
          <Col md={6}>
            <ProductCards
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
          <Col md={6}>
            <ProductCards
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
          <Col md={6}>
            <ProductCards
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>

          <Col md={6}>
            <TeamCard
              actions={actions}
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <TeamCard
              actions={actions}
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <TeamCard
              actions={actions}
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <TeamCard
              actions={actions}
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>

          <Col md={6}>
            <GalleryCards
              actions={actions}
              item={{
                id: 1,
                name: 'Snow Covered Mountain',
                category: 'Presentation',
                img: 'static/img/gallery/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <GalleryCards
              actions={actions}
              item={{
                id: 1,
                name: 'Snow Covered Mountain',
                category: 'Presentation',
                img: 'static/img/gallery/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <GalleryCards
              actions={actions}
              item={{
                id: 1,
                name: 'Snow Covered Mountain',
                category: 'Presentation',
                img: 'static/img/gallery/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <GalleryCards
              actions={actions}
              item={{
                id: 1,
                name: 'Snow Covered Mountain',
                category: 'Presentation',
                img: 'static/img/gallery/1.png',
              }}
            />
          </Col>

          <Col md={6}>
            <Cards headless>
              <ContactCard
                user={{
                  id: 1,
                  time: 1587041636455,
                  name: 'Duran Clayton',
                  designation: 'UI/UX Designer',
                  stared: false,
                  phone: '+90014525',
                  company: 'Business Development',
                  email: 'john@gmail.com',
                  img: 'static/img/users/1.png',
                }}
              />
            </Cards>
          </Col>
          <Col md={6}>
            <Cards headless>
              <ContactCard
                user={{
                  id: 1,
                  time: 1587041636455,
                  name: 'Duran Clayton',
                  designation: 'UI/UX Designer',
                  stared: false,
                  phone: '+90014525',
                  company: 'Business Development',
                  email: 'john@gmail.com',
                  img: 'static/img/users/1.png',
                }}
              />
            </Cards>
          </Col>
          <Col md={6}>
            <Cards headless>
              <ContactCard
                user={{
                  id: 1,
                  time: 1587041636455,
                  name: 'Duran Clayton',
                  designation: 'UI/UX Designer',
                  stared: false,
                  phone: '+90014525',
                  company: 'Business Development',
                  email: 'john@gmail.com',
                  img: 'static/img/users/1.png',
                }}
              />
            </Cards>
          </Col>
          <Col md={6}>
            <Cards headless>
              <ContactCard
                user={{
                  id: 1,
                  time: 1587041636455,
                  name: 'Duran Clayton',
                  designation: 'UI/UX Designer',
                  stared: false,
                  phone: '+90014525',
                  company: 'Business Development',
                  email: 'john@gmail.com',
                  img: 'static/img/users/1.png',
                }}
              />
            </Cards>
          </Col>

          <Col md={6}>
            <SampleCardOne />
          </Col>
          <Col md={6}>
            <SampleCardOne />
          </Col>
          <Col md={6}>
            <SampleCardOne />
          </Col>
          <Col md={6}>
            <SampleCardOne />
          </Col>

          <Col md={18}>
            <ProductCardsList
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default WidgetsCard;
