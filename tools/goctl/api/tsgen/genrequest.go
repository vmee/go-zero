package tsgen

import (
	_ "embed"
	"os"
	"path/filepath"

	"github.com/zeromicro/go-zero/tools/goctl/util/pathx"
)

//go:embed request.ts
var requestTemplate string

//go:embed requestInterface.ts
var requestInterfaceTemplate string

func genRequest(dir string) error {
	abs, err := filepath.Abs(dir)
	if err != nil {
		return err
	}

	
	filename := filepath.Join(abs, "gocliRequest.ts")
	if pathx.FileExists(filename) {
		return nil
	}
	

	if err := os.WriteFile(filename, []byte(requestTemplate), 0644); err != nil {
		return err
	}


	filename2 := filepath.Join(abs, "gocliRequestInterface.ts")
	if pathx.FileExists(filename2) {
		return nil
	}

	return os.WriteFile(filename2, []byte(requestInterfaceTemplate), 0644)
}
