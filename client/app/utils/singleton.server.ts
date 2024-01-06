
export function singleton<Value>(name: string, value: () => Value): Value {
	const globals = global as any

	globals.__singletons ??= {}
	globals.__singletons[name] ??= value()

	return globals.__singletons[name]
}
