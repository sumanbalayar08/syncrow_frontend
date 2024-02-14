import Header from '../components/header';
import Form from '../components/form';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
export async function getServerSideProps(context) {
  return {
    props: {
      bundle: JSON.parse(context.query.bundle),
      property_type: JSON.parse(context.query.property_type),
      itemList: JSON.parse(context.query.lis),
      amount: parseFloat(context.query.amount),
    },
  };
}
export default function Book({ bundle, property_type, itemList, amount }) {
  const router = useRouter();
  return (
    <div className='overflow-x-hidden'>
      <head>
        <style>
          @import
          url(https://fonts.cdnfonts.com/css/guthen-bloots-personal-use);
        </style>{' '}
      </head>
      <div className='desktop:h-114 laptop:h-108 relative'>
        <Header color='black' />

        <Form
          title='Details'
          amount={amount}
          bundle={bundle}
          property_size={property_type}
          item={itemList}
          type='bundle'
        />

        <div
          className='w-1/3 desktop:text-7xl laptop:text-6xl text-default absolute top-36 left-36'
          style={{ fontFamily: 'Guthen Bloots Personal Use' }}
        >
          Our Team of Experts will get in touch with you soon
        </div>
        <button
          className='text-white laptop:text-base desktop:text-xl laptop:w-36 laptop:h-8 desktop:h-10 rounded-lg absolute laptop:bottom-52 desktop:bottom-72 left-20 '
          style={{ background: '#747474' }}
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
        <Footer />
    </div>
  );
}
