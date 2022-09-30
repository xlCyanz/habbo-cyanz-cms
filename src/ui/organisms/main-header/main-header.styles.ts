import { StylesUtils } from "@utils";

const styles = StylesUtils.create({
  headerBoxImage: {
    height: 4,
    width: "100%",
    bg: "secondary",
    backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d8ccfa9-0c40-488c-8689-f397b4fbdb19/dcu3xrc-4a5c4133-41a9-4f4b-96a2-5070b4270b9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkOGNjZmE5LTBjNDAtNDg4Yy04Njg5LWYzOTdiNGZiZGIxOVwvZGN1M3hyYy00YTVjNDEzMy00MWE5LTRmNGItOTZhMi01MDcwYjQyNzBiOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lzxOE0J8_F4EGKmdSdSI-w0MXxpxBIUeZdOzkP83ZBM)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "150%",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerImage: {
    zIndex: 2,
  },
  blurBackground: {
    backdropFilter: "blur(0.8px)",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
  subNavbar: {
    py: 3,
    bg: "secondary",
    justifyContent: "space-between",
  },
  subNavbarContainer: {
    bg: "secondary",
  },
});

export default styles;
