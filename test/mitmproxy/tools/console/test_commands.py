from mitmproxy.tools.console.commands import Commands


async def test_command_reference_keyboard_navigation(console):
    """Command and help panes accept keys through Urwid's current focus API."""
    commands = Commands(console)
    commands.keypress((80, 24), "down")
    assert commands.focus_position == 0
    commands.keypress((80, 24), "m_next")
    assert commands.focus_position == 1
    commands.keypress((80, 24), "down")
    commands.keypress((80, 24), "m_next")
    assert commands.focus_position == 0
