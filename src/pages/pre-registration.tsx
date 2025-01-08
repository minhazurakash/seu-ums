import { usePreRegistrations } from '@apis/pre-registration/hooks';
const PreRegistrationPage = () => {
  const PreRegistrationQuery = usePreRegistrations({});

  console.log(PreRegistrationQuery?.data);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default PreRegistrationPage;
