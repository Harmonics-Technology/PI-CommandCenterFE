import { IAdminRightsProps } from '@components/generics/Schema';
import { withPageAuth } from '@components/generics/withPageAuth';
import { AdminRightsPage } from '@components/subpages/AdminRightsPage';
import { GetServerSideProps } from 'next';
import { ClientService, UserService } from 'src/services';

const SubscriptionDetailsPage = ({ data, activity }: IAdminRightsProps) => {
 return <AdminRightsPage data={data} activity={activity} />;
};

export default SubscriptionDetailsPage;

export const getServerSideProps: GetServerSideProps = withPageAuth(
 async (ctx) => {
  const { clientId } = ctx.query;
  // console.log({ id });
  try {
   const client =
    await ClientService.getClientById({
     id: clientId,
    });
   const activity = await UserService.getTransferHistory({
    superAdminId: clientId,
   });
   return {
    props: {
     data: client.data,
     activity: activity.data,
     // id,
    },
   };
  } catch (error: any) {
   console.log({ error });
   return {
    props: {
     sub: {},
     activity: [],
    },
   };
  }
 },
);
