<script lang='ts'>
    import {Root as MenuBar, Menu, Trigger, Content, Item as ItemBar, Separator} from '$lib/components/ui/menubar';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import Logo from '../../assets/logo.png';
    import { Search, ChevronDown } from 'lucide-svelte';

    const menus = [
        { id: '1', menu: 'Profile', items: ['History', 'Vision and Mission', 'Curriculum Structure'] },
        { id: '2', menu: 'Study Programs', items: ['Undergraduate Program', 'Graduate Program'] },
        { id: '3', menu: 'Research Group', items: ['Theoretical and Computation', 'Material and Energy', 'Electronics and Instrumentation', 'Optics and Spectroscopy'] },
        { id: '4', menu: 'Learning Resources', items: ['Libraries', 'Laboratories', 'Module Handbook', 'Staff Handbook', 'Portfolio'] },
        { id: '5', menu: 'Staff', items: ['Academic Staff', 'Non-Academid Staff', 'Students'] },
    ]
</script>

<MenuBar class='px-5 py-7 w-screen rounded-none fixed z-10'>
    <Button  href="/" variant='ghost' class='flex items-center mr-auto font-semibold gap-x-2 hover:bg-white'>
        <img src={Logo} alt="Logo Unhas" class="h-10">
        Department of Physics
    </Button>
    {#each menus as menu (menu.id)}
        <Menu>
            <Trigger class='cursor-pointer rounded-none'>{menu.menu} <ChevronDown class='ml-2 h-4 w-4 left-3' /></Trigger>
            <Content class='rounded-none'>
                {#each menu.items as item}
                    <ItemBar>{item}</ItemBar>
                    <Separator />
                {/each}
            </Content>
        </Menu>
    {/each}
    <Menu>
        <ItemBar class="cursor-pointer font-medium rounded-none">
            <a href="/">News</a>
        </ItemBar>
    </Menu>
    <div class="flex items-center relative">
        <Search class='absolute mr-2 h-4 w-4 left-3 text-muted-foreground' />
        <Input type='search' placeholder="Search" class='h-8 pl-8 pr-3 max-w-[180px] border-2 focus:outline-none rounded-none' />
    </div>
</MenuBar>
