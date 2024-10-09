import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Dropdown({ icon: Icon, options }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton>
        <Icon className="" />
      </MenuButton>
      <MenuItems className="absolute z-[70] right-0 mt-2 font-bold w-52 origin-top-right rounded-xl text-slate-500  p-1 text-sm/6   backdrop-blur-md bg-slate-800/95   focus:outline-none">
        {options.map((option, index) => (
          <>
            {option.label && (
              <div
                key={`label-${index}`}
                className="label-dropdown text-xs text-gray-400 px-3 py-1"
              >
                {option.label}
              </div>
            )}

            {option.items?.map((item, idx) => (
              <MenuItem key={`item-${index}-${idx}`}>
                {({ active }) => (
                  <button
                    className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${
                      active ? "bg-[#ffffff0f]" : ""
                    }`}
                    onClick={item.action}
                  >
                    {item.icon && (
                      <item.icon className="w-4 h-4 text-gray-500" />
                    )}
                    {item.label}
                    {item.shortcut && (
                      <kbd className="ml-auto hidden font-sans text-xs text-slate-500 group-hover:inline">
                        {item.shortcut}
                      </kbd>
                    )}
                  </button>
                )}
              </MenuItem>
            ))}
          </>
        ))}
      </MenuItems>
    </Menu>
  );
}
