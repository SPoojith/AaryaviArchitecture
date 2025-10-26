import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconChevronUp,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
  useComputedColorScheme,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';

const mockdata = [
  {
    icon: IconCode,
    title: '2D Rendering',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: '3D Rendering',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Layout Plan',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
];
function Header() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(true);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title} style={{padding: 'var(--mantine-spacing-md)'}}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={2}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Logo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Services
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Services Offered</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="#" className={classes.link}>
              Learn
            </a>

            <a href="#" className={classes.link}>
              Academy
            </a>
            
            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="xl"
                radius="md"
                aria-label="Toggle color scheme"
            >
                {computedColorScheme !== 'light' ? (
                  <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                ) : (
                  <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
                )}
            </ActionIcon>
          </Group>

          {/* <Group h="100%" gap={0} visibleFrom="sm">
          </Group> */}

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks} style={{paddingLeft: 'var(--mantine-spacing-md)'}}>
            <Center inline>
              <Box component="span" mr={5}>
                Services
              </Box>
              {linksOpened ? <IconChevronUp size={16} color={theme.colors.blue[6]} />:<IconChevronDown size={16} color={theme.colors.blue[6]} />}
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="xl"
                radius="md"
                aria-label="Toggle color scheme"
            >
                {computedColorScheme !== 'light' ? (
                  <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                ) : (
                  <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
                )}
            </ActionIcon>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
export default Header;