import UserManager from 'components/UserManager /UserManager';
import { ColorModeProvider } from 'context/ThemeContext';
import { UserInfoProvider } from 'context/UserInfoProvider';
import { UserProvider } from 'context/UserProvider';

function App() {
  return (
    <UserInfoProvider>
      <UserProvider>
        <ColorModeProvider>
          <UserManager />
        </ColorModeProvider>
      </UserProvider>
    </UserInfoProvider>
  );
}

export default App;
