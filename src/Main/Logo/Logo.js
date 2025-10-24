import { useState } from 'react';
import { Modal, useMantineTheme, useComputedColorScheme } from '@mantine/core';
import logo from '../../assets/Logo1.jpeg';
import { getPrimaryColor } from '../colors';
function Logo() {
  const [opened, setOpened] = useState(false);
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const primaryColor = getPrimaryColor(computedColorScheme);
  console.log(primaryColor);
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} centered withCloseButton={false}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 400, height: 240, borderRadius: '10%', border: `2px solid ${primaryColor}`, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            />
            <div style={{ fontWeight: 'bold', fontFamily: 'serif', fontSize: 28, marginTop: 16 }}>Aaryavi Architecture</div>
        </div>
      </Modal>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: 60, height: 40, borderRadius: '10%', border: `2px solid ${primaryColor}`, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}
          onClick={() => setOpened(true)}
        />
        <div style={{ fontWeight: 'bold', fontFamily: 'serif', fontSize: 18, marginLeft: 12 }}>Aaryavi Architecture</div>
      </div>
    </>
  );
}
export default Logo;