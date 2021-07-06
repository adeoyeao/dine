import { Text, Button } from '../components'

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Button
        buttonType='dark'
        text='submit'
        isActive
      />
      <Button
        buttonType='light'
        text='submit'
        isActive
      />
    </>
  );
};

export default BasicLayout;
