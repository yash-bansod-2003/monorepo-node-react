export const HomePage = () => {
    return (
        <div className="pb-8 pt-6 flex justify-center items-center">
            <div className="w-full flex gap-10">
                <div className="space-y-6">
                    <div className="bg-primary h-20 w-20">Primary</div>
                    <div className="bg-primary-foreground h-20 w-20">Primary</div>
                </div>
                <div className="space-y-6">
                    <div className="bg-secondary h-20 w-20">secondary</div>
                    <div className="bg-secondary-foreground h-20 w-20">secondary</div>
                </div>
                <div className="space-y-6">
                    <div className="bg-muted h-20 w-20">Muted</div>
                    <div className="bg-muted-foreground h-20 w-20">muted fg</div>
                </div>
                <div className="space-y-6">
                    <div className="bg-accent h-20 w-20">accent</div>
                    <div className="bg-accent-foreground h-20 w-20">accent dg</div>
                </div>
                <div className="space-y-6">
                    <div className="bg-destructive h-20 w-20">destructive</div>
                    <div className="bg-destructive-foreground h-20 w-20">desrtctive fg</div>
                </div>
                <div className="space-y-6">
                    <div className="bg-popover h-20 w-20">popover</div>
                    <div className="bg-popover-foreground h-20 w-20">popover</div>
                </div>
                <div className="space-y-6">
                    <div className="bg-card h-20 w-20">card</div>
                    <div className="bg-card-foreground h-20 w-20">card</div>
                </div>
                <div className="space-y-6">
                    <div className="bg-background h-20 w-20">Background</div>
                    <div className="bg-foreground h-20 w-20">Foreground</div>
                    <div className="bg-border h-20 w-20">border</div>
                    <div className="bg-input h-20 w-20">input</div>
                    <div className="bg-ring h-20 w-20">ring</div>

                </div>
            </div>
        </div>
    );
};
