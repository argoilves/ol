OLED.init(64, 128)

def on_forever():
    OLED.write_string_new_line("222")
basic.forever(on_forever)
