enum Setting
{
    Something = "Client:Something",
}

class Settings
{
    public static get<T> (key :string, defaultValue? :T) :T
    {
        let encoded :string = localStorage.getItem(key);

        let value :T = defaultValue || null;

        if (encoded) value = JSON.parse(encoded) as T;

        return value;
    }

    public static set<T> (key :string, value :T) :void
    {
        let encoded :string = null;

        if (value !== undefined && value !== null) 
        {
            encoded = JSON.stringify(value);
        
            localStorage.setItem(key, encoded);
        }
    }
}

export
{
    Settings,
    Setting
};
