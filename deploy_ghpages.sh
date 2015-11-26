#!/bin/sh
#
# Copyright (c) 2013-2015 by The SeedStack authors. All rights reserved.
#
# This file is part of SeedStack, An enterprise-oriented full development stack.
#
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#


(
	cd docs
	git init
	git config user.name "Travis-CI"
	git config user.email "travis@seedstack.org"
	git add .
	git commit -m "Built for gh-pages of http://seedstack.github.io/jsdoc"
	git push --force --quiet "https://${GITHUB_TOKEN}@github.com/seedstack/jsdoc" master:gh-page
)